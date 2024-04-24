import React, { useState } from 'react';
//import { useTheme } from "@mui/material"; import { tokens } from "../../theme"; import { styled } from '@mui/material/styles';, { SelectChangeEvent }TableHead,
import { Typography, Card, Grid, CardMedia, Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Header from '../../components/Header';
import { Table, TableBody, TableCell, TableContainer,TableRow, Paper } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

const Pagos = () => {
    const [selectedImage] = useState(null);
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
      };
    
    return (
        <Box m="20px" >
            <Grid container spacing={1} style={{ margin: '-5px' }} >
                <Grid item xs={12} sm={6} style={{ margin: '1px' }}>
                    <Card>
                        <CardMedia
                            component="img"
                            alt="Imagen Principal"
                            height="600"
                            image={selectedImage || 'https://files-pagos.utpxpedition.com/web-prod/2021-01/imgbanner-01.png'}
                        />
                    </Card>
                </Grid>

                <Grid item xs={12} sm={5} style={{ margin: '1px' }}>
                    <Box >
                        <Header title="PAGO EN LINEA" subtitle="Ingresa tu documento de identidad y fecha de nacimiento con los que te registraste para realizar el pago en línea." />
                    </Box>
                    
                    <FormControl fullWidth sm={4} md={4}>
                        <InputLabel id="demo-simple-select-label">Tipo de documento</InputLabel>
                            <Select 
                                required
                                labelId="demo-simple-select-required-label"
                                id="demo-simple-select-required"
                                value={age}
                                label="Tipo de documento"
                                onChange={handleChange}
                            >
                                <MenuItem value="" disabled > <em>Elige tu tipo de documento</em> </MenuItem>
                                <MenuItem value={1}>D.N.I</MenuItem>
                                <MenuItem value={2}>Pasaporte</MenuItem>
                                <MenuItem value={3}>C.E</MenuItem>
                            </Select>

                            <Box  mb={1}>
                                <br />
                                <TextField 
                                    id="outlined-basic" 
                                    label="Numero de Documento" 
                                    variant="outlined"
                                    fullWidth
                                    size="medium" />
                            </Box>

                            

                            <Box >
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs={6} md={4}>
                                        <FormControl fullWidth>
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DemoContainer components={['DatePicker']}>
                                                    <DatePicker label="Fecha de Nacimiento" />
                                                </DemoContainer>
                                            </LocalizationProvider>
                                        </FormControl>
                                    </Grid>

                                    <Grid item xs={6} md={4}>
                                        <Stack direction="row" >
                                            <Button
                                                variant="outlined"
                                                startIcon={<DoubleArrowIcon />}
                                                size="medium" 
                                                color="secondary">
                                                CONSULTAR
                                            </Button>
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </Box>
                            
                    </FormControl>
                    
                    <Box  mb={2} spacing={1} style={{ margin: '1px' }}>
                        <br /> 
                        <Typography variant="h3" gutterBottom>
                            Detalles:
                        </Typography>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>Estudiante</TableCell>
                                        <TableCell>{ "Loading..."}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Carrera</TableCell>
                                        <TableCell>S/. {"Loading..."}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Campus</TableCell>
                                        <TableCell>
                                            Ancho: { "Loading..."} metros |
                                            Longitud: {"Loading..."} metros
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Modalidad de estudios</TableCell>
                                        <TableCell>{ "Loading..."}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Monto a Pagar</TableCell>
                                        <TableCell>{ "Loading..."}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>

                    </Box> 
                </Grid>
            </Grid> 
        </Box>
    );
}

export default Pagos;