import { browser, element, by } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import SignInPage from './../../page-objects/signin-page';
import PacienteComponentsPage from './paciente.page-object';
import PacienteUpdatePage from './paciente-update.page-object';
import {
  waitUntilDisplayed,
  waitUntilAnyDisplayed,
  click,
  getRecordsCount,
  waitUntilHidden,
  waitUntilCount,
  isVisible,
} from '../../util/utils';

const expect = chai.expect;

describe('Paciente e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let pacienteComponentsPage: PacienteComponentsPage;
  let pacienteUpdatePage: PacienteUpdatePage;
  const username = process.env.E2E_USERNAME ?? 'admin';
  const password = process.env.E2E_PASSWORD ?? 'admin';

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.waitUntilDisplayed();
    await signInPage.username.sendKeys(username);
    await signInPage.password.sendKeys(password);
    await signInPage.loginButton.click();
    await signInPage.waitUntilHidden();
    await waitUntilDisplayed(navBarPage.entityMenu);
    await waitUntilDisplayed(navBarPage.adminMenu);
    await waitUntilDisplayed(navBarPage.accountMenu);
  });

  beforeEach(async () => {
    await browser.get('/');
    await waitUntilDisplayed(navBarPage.entityMenu);
    pacienteComponentsPage = new PacienteComponentsPage();
    pacienteComponentsPage = await pacienteComponentsPage.goToPage(navBarPage);
  });

  it('should load Pacientes', async () => {
    expect(await pacienteComponentsPage.title.getText()).to.match(/Pacientes/);
    expect(await pacienteComponentsPage.createButton.isEnabled()).to.be.true;
  });

  it('should create and delete Pacientes', async () => {
    const beforeRecordsCount = (await isVisible(pacienteComponentsPage.noRecords))
      ? 0
      : await getRecordsCount(pacienteComponentsPage.table);
    pacienteUpdatePage = await pacienteComponentsPage.goToCreatePaciente();
    await pacienteUpdatePage.enterData();

    expect(await pacienteComponentsPage.createButton.isEnabled()).to.be.true;
    await waitUntilDisplayed(pacienteComponentsPage.table);
    await waitUntilCount(pacienteComponentsPage.records, beforeRecordsCount + 1);
    expect(await pacienteComponentsPage.records.count()).to.eq(beforeRecordsCount + 1);

    await pacienteComponentsPage.deletePaciente();
    if (beforeRecordsCount !== 0) {
      await waitUntilCount(pacienteComponentsPage.records, beforeRecordsCount);
      expect(await pacienteComponentsPage.records.count()).to.eq(beforeRecordsCount);
    } else {
      await waitUntilDisplayed(pacienteComponentsPage.noRecords);
    }
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
