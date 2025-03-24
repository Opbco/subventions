import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { setInfoMsg } from "./../redux/actions/configActions";
import { useGetMyDemandesQuery } from "./../redux/services/openApi";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Loading from "../../utils/Loading";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
    writingMode: "sideways-lr",
    padding: 0,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const MyDemandes = (props) => {
  const { t } = useTranslation();
  const {
    data,
    isFetching,
    error,
  } = useGetMyDemandesQuery(
    props.structure.id,
    {
      pollingInterval: 0,
      refetchOnMountOrArgChange: true,
      skip: false,
    }
  );

  useEffect(() => {
    document.title = props.title;
  }, []);

  return isFetching ? (
    <Loading />
  ) : (
    <TableContainer component={Paper} sx={{ p: "2px 6px" }}>
      <Table sx={{ minWidth: 700 }} size="small" aria-label="search table">
        <TableHead>
          <TableRow>
            <StyledTableCell>{t("table.reference")}</StyledTableCell>
            <StyledTableCell align="right">
              {t("table.dateDemande")}
            </StyledTableCell>
            <StyledTableCell align="right">{t("table.status")}</StyledTableCell>
            <StyledTableCell align="right">
              {t("table.montant")}
            </StyledTableCell>
            <StyledTableCell align="right">
              {t("table.observation")}
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Boolean(data?.length)? data?.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.session}
              </StyledTableCell>
              <StyledTableCell align="right">
                {row.date_demande}
              </StyledTableCell>
              <StyledTableCell align="right">{row.statut}</StyledTableCell>
              <StyledTableCell align="right">{row.montant}</StyledTableCell>
              <StyledTableCell align="right">{row.observation}</StyledTableCell>
            </StyledTableRow>
          )): (<StyledTableRow>
              <StyledTableCell colSpan={5} align="center">
                {t('empty_demands')}
              </StyledTableCell>
            </StyledTableRow>)}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const mapStateToProps = (state) => ({
  roles: state.auth.roles,
  structure: state.auth.credentials.structure,
});

const mapActionsToProps = {
  setInfoMsg,
};

export default connect(mapStateToProps, mapActionsToProps)(MyDemandes);
