import { SidebarMenuModule } from './sidebar-menu.module';

describe('SidebarMenuModule', () => {
  let sidebarMenuModule: SidebarMenuModule;

  beforeEach(() => {
    sidebarMenuModule = new SidebarMenuModule();
  });

  it('should create an instance', () => {
    expect(sidebarMenuModule).toBeTruthy();
  });
});
