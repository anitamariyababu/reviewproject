import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMobilesComponent } from './newmobiles.component';

describe('NewmobilesComponent', () => {
  let component: NewMobilesComponent;
  let fixture: ComponentFixture<NewMobilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewMobilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMobilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
