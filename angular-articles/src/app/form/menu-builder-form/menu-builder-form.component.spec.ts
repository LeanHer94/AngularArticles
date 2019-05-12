import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBuilderFormComponent } from './menu-builder-form.component';

describe('MenuBuilderFormComponent', () => {
  let component: MenuBuilderFormComponent;
  let fixture: ComponentFixture<MenuBuilderFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuBuilderFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBuilderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
