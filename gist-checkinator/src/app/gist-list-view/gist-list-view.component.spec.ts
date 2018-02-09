import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GistListViewComponent } from './gist-list-view.component';

describe('GistListViewComponent', () => {
  let component: GistListViewComponent;
  let fixture: ComponentFixture<GistListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GistListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GistListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
