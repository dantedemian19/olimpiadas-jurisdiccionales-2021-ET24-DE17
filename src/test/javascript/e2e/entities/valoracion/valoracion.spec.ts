import { browser, element, by } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import SignInPage from './../../page-objects/signin-page';
import ValoracionComponentsPage from './valoracion.page-object';
import ValoracionUpdatePage from './valoracion-update.page-object';
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

describe('Valoracion e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let valoracionComponentsPage: ValoracionComponentsPage;
  let valoracionUpdatePage: ValoracionUpdatePage;
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
    valoracionComponentsPage = new ValoracionComponentsPage();
    valoracionComponentsPage = await valoracionComponentsPage.goToPage(navBarPage);
  });

  it('should load Valoracions', async () => {
    expect(await valoracionComponentsPage.title.getText()).to.match(/Valoracions/);
    expect(await valoracionComponentsPage.createButton.isEnabled()).to.be.true;
  });

  it('should create and delete Valoracions', async () => {
    const beforeRecordsCount = (await isVisible(valoracionComponentsPage.noRecords))
      ? 0
      : await getRecordsCount(valoracionComponentsPage.table);
    valoracionUpdatePage = await valoracionComponentsPage.goToCreateValoracion();
    await valoracionUpdatePage.enterData();

    expect(await valoracionComponentsPage.createButton.isEnabled()).to.be.true;
    await waitUntilDisplayed(valoracionComponentsPage.table);
    await waitUntilCount(valoracionComponentsPage.records, beforeRecordsCount + 1);
    expect(await valoracionComponentsPage.records.count()).to.eq(beforeRecordsCount + 1);

    await valoracionComponentsPage.deleteValoracion();
    if (beforeRecordsCount !== 0) {
      await waitUntilCount(valoracionComponentsPage.records, beforeRecordsCount);
      expect(await valoracionComponentsPage.records.count()).to.eq(beforeRecordsCount);
    } else {
      await waitUntilDisplayed(valoracionComponentsPage.noRecords);
    }
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
