export const VIEWS: View[] = [
    { id: 'home', text: 'ACCUEIL'},
    { id: 'history', text: 'HISTOIRE' }, 
    { id: 'marriage', text: 'MARIAGE' },
    { id: 'logistics', text: 'LOGISTIQUE' },
    { id: 'rsvp', text: 'RSVP' }
  ];

  export class View {
    constructor(
      id: string,
      text: string
    ) {}
  }
  