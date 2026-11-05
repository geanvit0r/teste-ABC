import { expect } from '@playwright/test';

const baseUrl = 'https://localhost:44329/';

export default class OutrosRepositoriosPage {

    constructor(page) {
        this.page = page;

        // Elementos da página
        this.campoNome = page.locator("[name='Result.Name']");
        this.botaoPesquisar = page.locator("[type='submit']");

        // Mensagens
        this.mensagemSucesso = page.getByText('×OK');
        this.mensagemRepositorioNaoEncontrado = page.getByText('×Não existe repositórios com');
        this.mensagemCampoObrigatorio = page.getByText('×O campo Nome Repositório tem que ser preenchido');

        // Título
        this.tituloInicial = page.getByRole('heading', { name: 'Teste Desenvolvedor W12' });
        this.tituloOutrosRepositorios = page.getByRole('heading', { name: 'Veja outros Repositórios' });
    }

    // Acessar a tela de outros repositórios
    async acessarTelaOutrosRepositorios() {
        await this.page.goto(baseUrl);

        await expect(this.tituloInicial).toBeVisible();

        await this.page.locator("[href='/Home/GetRepositorie']").click();

        await expect(this.tituloOutrosRepositorios).toBeVisible();
    }

    // Preencher o campo Nome
    async preencherCampoNome(nome) {
        await this.campoNome.fill(nome);
    }

    // Clicar no botão Pesquisar
    async clicarBotaoPesquisar() {
        await this.botaoPesquisar.click();
    }

    // Realizar pesquisa de repositório
    async pesquisarRepositorio(nome) {
        await this.preencherCampoNome(nome);
        await this.clicarBotaoPesquisar();
    }

    // Validar mensagem de sucesso
    async validarMensagemSucesso() {
        await expect(this.mensagemSucesso).toBeVisible();
    }

    // Validar mensagem de repositório não encontrado
    async validarRepositorioNaoEncontrado() {
        await expect(this.mensagemRepositorioNaoEncontrado).toBeVisible();
    }

    // Validar mensagem de campo obrigatório
    async validarCampoNomeObrigatorio() {
        await expect(this.mensagemCampoObrigatorio).toBeVisible();
    }

    // Validar se o repositório está visível
    async validarRepositorioVisivel(nome) {
        const repositorio = this.page.locator(`[data-name='${nome}']`);

        await expect(repositorio).toBeVisible();
    }

    // Validar nome do repositório
    async validarNomeRepositorio(nome) {
        const repositorio = this.page.locator(`[data-name='${nome}']`);

        await expect(repositorio).toHaveText(nome);
    }

    // Validar que o repositório não está na listagem
    async validarRepositorioNaoListado(nome) {
        const repositorio = this.page.locator(`[data-name='${nome}']`);

        await expect(repositorio).toHaveCount(0);
    }
}
