import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import CONSTANTS from "../../../utils/Constants";
import { UNAUTHENTICATED } from "../reducers/UserReducer";

const baseQuery = fetchBaseQuery({
  baseUrl: CONSTANTS.BASE_API_URL,
  prepareHeaders: (headers, { getState, endpoint }) => {
    const token = getState()?.auth?.access_token;
    if (endpoint.startsWith("upload")) {
      headers.set("Accept", "application/json");
    } else {
      headers.set("Content-Type", "application/json");
    }
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    // log out the user
    api.dispatch(UNAUTHENTICATED());
  }
  return result;
};

export const openApi = createApi({
  reducerPath: "openApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: [
    "Compte",
    "Structure",
    "User",
    "Demande",
    "Piece",
    "Demande_Piece"
  ],
  endpoints: (builder) => ({
    getSession: builder.query({
      query: (statut) => `/sessions?statut=${statut}`,
    }),
    getListPieces: builder.query({
      query: (statut) => `/pieces?isong=${statut}`,
      providesTags: (result, error, arg) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Piece", id })),
              { type: "Piece", id: "LIST" },
            ]
          : [{ type: "Piece", id: "LIST" }],
    }),
    getStructureDetails: builder.query({
      query: (id) => `/structures/${id}`,
      providesTags: (result, error, id) => [{ type: "Structure", id }],
    }),
    getDemandeDetails: builder.query({
      query: (id) => `/demandes/${id}`,
      providesTags: (result, error, id) => [{ type: "Demande", id }],
    }),
    getDemandePieces: builder.query({
      query: (id) => `/demandes/${id}/pieces`,
      providesTags: (result, error, arg) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Demande_Piece", id })),
              { type: "Demande_Piece", id: "LIST" },
            ]
          : [{ type: "Demande_Piece", id: "LIST" }],
    }),
    getDemandeCurrent: builder.query({
      query: (data) => `/structures/${data.id}/sessions/${data.session}/demandes`,
      providesTags: (result, error, arg) => [{ type: "Demande", id: result?.id }],
    }),
    getMyCompteBancaire: builder.query({
      query: (id) => `/structures/${id}/comptes`,
      providesTags: (result, error, arg) => [{ type: "Compte", id: result?.id }],
    }),
    getMyDemandes: builder.query({
      query: (id) => `/structures/${id}/demandes`,
      providesTags: (result, error, arg) =>
        result
          ? [
              ...result?.map(({ id }) => ({ type: "Demande", id })),
              { type: "Demande", id: "LIST" },
            ]
          : [{ type: "Demande", id: "LIST" }],
    }),
    createDemande: builder.mutation({
      query: (body) => ({
        url: `/demandes`,
        method: "POST",
        body,
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "Demande", id: result?.id },
        { type: "Demande", id: "LIST" },
      ],
    }),
    editDemande: builder.mutation({
      query: (body) => ({
        url: `/demandes/${body.id}`,
        method: "PATCH",
        body
      }),
      invalidatesTags: (result, error, arg) => {
        const res = JSON.parse(result);
        console.log(res);
        return [
        { type: "Demande", id: arg.id },
        { type: "Structure", id: res?.structure },
      ];
    },
    }),
    editStructure: builder.mutation({
      query: (body) => ({
        url: `/structures/${body.id}`,
        method: "PATCH",
        body
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "Structure", id: arg.id },
      ],
    }),
    editOrCreateCompteBancaire: builder.mutation({
      query: (body) => ({
        url: `/structures/${body.structure}/comptes`,
        method: "POST",
        body
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "Compte", id: arg.structure },
      ],
    }),
    uploadRibFile: builder.mutation({
      query: (arg) => ({
        url: `/structures/${arg.id}/documents`,
        method: "POST",
        body: arg.data,
        formData: true,
      }),
      transformResponse: (response, meta, arg) => JSON.parse(response),
    }),
    uploadDemandeFile: builder.mutation({
      query: (arg) => ({
        url: `/demandes/${arg.id}/pieces/${arg.piece}`,
        method: "POST",
        body: arg.data,
        formData: true,
      }),
      invalidatesTags: (result, error, arg) => [
        "Demande_Piece",
        { type: "Demande", id: arg.id },
      ],
      transformResponse: (response, meta, arg) => JSON.parse(response),
    }),
    deleteDemandePiece: builder.mutation({
      query(arg) {
        return {
          url: `/demandes/${arg.id}/pieces/${arg.piece}`,
          method: "DELETE",
        };
      },
      // Invalidates all queries that subscribe to this TicketProducts `id` only.
      invalidatesTags: (result, error, arg) => [{ type: "Demande_Piece", id:arg.dp }],
    }),
  }),
});

export const {
  useGetSessionQuery,
  useGetListPiecesQuery,
  useGetMyCompteBancaireQuery,
  useGetDemandePiecesQuery,
  useGetDemandeCurrentQuery,
  useGetStructureDetailsQuery,
  useGetDemandeDetailsQuery,
  useGetMyDemandesQuery,
  useCreateDemandeMutation,
  useUploadDemandeFileMutation,
  useUploadRibFileMutation,
  useDeleteDemandePieceMutation,
  useEditDemandeMutation,
  useEditStructureMutation,
  useEditOrCreateCompteBancaireMutation,
} = openApi;
