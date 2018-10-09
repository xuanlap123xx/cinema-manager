import { TopMenuModule } from './top-menu.module';

describe('TopMenuModule', () => {
  let topMenuModule: TopMenuModule;

  beforeEach(() => {
    topMenuModule = new TopMenuModule();
  });

  it('should create an instance', () => {
    expect(topMenuModule).toBeTruthy();
  });
});
