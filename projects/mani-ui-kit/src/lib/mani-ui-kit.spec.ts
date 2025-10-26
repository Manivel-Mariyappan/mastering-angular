import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManiUiKit } from './mani-ui-kit';

describe('ManiUiKit', () => {
  let component: ManiUiKit;
  let fixture: ComponentFixture<ManiUiKit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManiUiKit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManiUiKit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
