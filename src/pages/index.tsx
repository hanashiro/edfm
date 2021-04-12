import React, { useState } from 'react';
import Head from 'next/head';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment';
import TextFieldMask from 'ui/components/inputs/TextFieldMask/TextFieldMask';
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';
import { Button, Container, Paper, Typography } from '@material-ui/core';
import {
    FormElementsContainer,
    ProfissionaisContainer,
    ProfissionaisPaper,
} from '@styles/pages/index.styled';

export default function Home() {
    const [cep, setCep] = useState('');

    return (
        <div>
            <SafeEnvironment />
            <PageTitle
                title={'Conheça os profissionais'}
                subtitle={
                    'Preencha seu endereço e veja todos os profissionais da sua localidade'
                }
            />

            <Container sx={{ mb: 10 }}>
                <FormElementsContainer>
                    <TextFieldMask
                        label={'Digite seu CEP'}
                        mask={'99.999-999'}
                        variant={'outlined'}
                        value={cep}
                        onChange={(event) => setCep(event.target.value)}
                        fullWidth
                    />

                    <Typography color={'error'}>CEP não encontrado</Typography>

                    <Button
                        variant={'contained'}
                        color={'secondary'}
                        sx={{ width: '220px' }}
                    >
                        Buscar
                    </Button>
                </FormElementsContainer>

                <ProfissionaisPaper>
                    <ProfissionaisContainer>
                        <UserInformation
                            name={'Akira Hanashiro'}
                            rating={3}
                            description={'São Paulo'}
                            picture={'https://github.com/hanashiro.png'}
                        />
                        <UserInformation
                            name={'Akira Hanashiro'}
                            rating={3}
                            description={'São Paulo'}
                            picture={'https://github.com/hanashiro.png'}
                        />
                        <UserInformation
                            name={'Akira Hanashiro'}
                            rating={3}
                            description={'São Paulo'}
                            picture={'https://github.com/hanashiro.png'}
                        />
                        <UserInformation
                            name={'Akira Hanashiro'}
                            rating={3}
                            description={'São Paulo'}
                            picture={'https://github.com/hanashiro.png'}
                        />
                    </ProfissionaisContainer>
                </ProfissionaisPaper>
            </Container>
        </div>
    );
}
