import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { doesNotReject } from 'assert';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatToolbarModule,
        MatCardModule,
        MatIconModule,
        MatGridListModule,
        MatBadgeModule,
        MatButtonToggleModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Un petit jeu d\'allumettes'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Un petit jeu d\'allumettes');
  });

  // On test la désactivation des bouttons suivant le joueur en partie
  it('Le joueur 1 débute la partie => le joueurs 2 doit avoir les bouttons désactivés', () => {
    const fixture = TestBed.createComponent(AppComponent);
    // Variable qui pointe vers le HTML 
    const elementHtml = fixture.debugElement.nativeElement;
    // J1 doit avoir les boutton activés et J2 les boutons désactivés
    expect(elementHtml.querySelector('#j1').hasAttribute('disabled')).toBeFalsy;
    expect(elementHtml.querySelector('#j2').hasAttribute('disabled')).toBeTruthy;
  });

  // On test la désactivation du bouton rejouer au début de la partie
  it('Au début de la partie, le boutton rejouer doit être désactivé', () => {
    const fixture = TestBed.createComponent(AppComponent);
    // Variable qui pointe vers le HTML 
    const elementHtml = fixture.debugElement.nativeElement;
    // J1 doit avoir les boutton activés et J2 les boutons désactivés
    expect(elementHtml.querySelector('#btnRejouer').hasAttribute('disabled')).toBeTruthy;
  });
});
