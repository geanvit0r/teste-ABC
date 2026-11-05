import { test, expect } from '@playwright/test';
import OutrosRepositoriosPage from './pages/outrosRepositorios/outrosRepositoriosPage';

let repositoriosPage;

test.beforeEach(async ({ page }) => {
    repositoriosPage = new OutrosRepositoriosPage(page);
    await repositoriosPage.acessarTelaOutrosRepositorios();
});

test('Pesquisar repositório pelo nome completo', async ({ page }) => {
    await repositoriosPage.pesquisarRepositorio('AnimacaoUnit');
    await repositoriosPage.validarMensagemSucesso();
    await repositoriosPage.validarRepositorioVisivel('AnimacaoUnit');
    await repositoriosPage.validarNomeRepositorio('AnimacaoUnit');
});

test('Pesquisar repositório por parte do nome', async ({ page }) => {
    await repositoriosPage.pesquisarRepositorio('AnimacaoUn');
    await repositoriosPage.validarMensagemSucesso();
    await repositoriosPage.validarRepositorioVisivel('AnimacaoUnit');
});

test('Pesquisar por repositório inexistente', async ({ page }) => {
    await repositoriosPage.pesquisarRepositorio('repoinexistente');
    await repositoriosPage.validarRepositorioNaoEncontrado();
    await repositoriosPage.validarRepositorioNaoListado('repoinexistente');
});

test('Pesquisar por repositório sem preencher o campo Nome', async ({ page }) => {
    await repositoriosPage.pesquisarRepositorio('');
    await repositoriosPage.validarCampoNomeObrigatorio();
});