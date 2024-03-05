import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { connect } from "react-redux";


const Entete = (props) => {
  return (
    <Stack direction="column" justifyContent="space-between" alignItems="center" gap={2} width="100%">
        <Stack direction="row" justifyContent="space-between" alignItems="center" width="100%">
            <Stack direction="column" justifyContent="center" alignItems="center">
                <Box>
                    <Typography variant="h5">
                        République du cameroun
                    </Typography>
                    <Typography variant="h6" textAlign="center" textTransform="none">
                        Paix-Travail-Patrie<br />
                        **************
                    </Typography>
                </Box>
                <Typography variant="h5">
                    Ministère des enseignements secondaires<br />
                    **************
                </Typography>
                <Typography variant="h5">
                    secrétariat général
                </Typography>
            </Stack>
            <Stack direction="column" justifyContent="center" alignItems="center">
                <Box>
                    <Typography variant="h5">
                        Republic of cameroon
                    </Typography>
                    <Typography variant="h6" textAlign="center" textTransform="none">
                        Peace-Work-Fatherland<br />
                        **************
                    </Typography>
                </Box>
                <Typography variant="h5">
                    Ministry of secondary education<br />
                    **************
                </Typography>
                <Typography variant="h5">
                    secretariat general
                </Typography>
            </Stack>
        </Stack>
        <Typography variant="h4">
            Demande de subvention financière de l'état aux organisations et aux établissements scolaires ou formations privés d'enseignement secondaire et normal
        </Typography>
        <Typography variant="h4">
            Année budgetaire {new Date(props.user.session.dateOpen.date).getFullYear()}
        </Typography>
    </Stack>
  )
}

const mapStateToProps = (state) => ({
    user: state.auth.credentials,
  });
  
const mapActionsToProps = {};
  
export default connect(mapStateToProps, mapActionsToProps)(Entete);