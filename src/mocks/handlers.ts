import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/api/v1/projects', () => {
    return HttpResponse.json([
      { id: '1', name: 'Graduate Talent 2026', organizationId: 'org1' },
      { id: '2', name: 'AI Engineering Cohort', organizationId: 'org1' },
    ]);
  }),
  
  http.get('/api/v1/identify/participants', () => {
    return HttpResponse.json([
      { id: 'p1', name: 'Alice Smith', status: 'QUALIFIED' },
      { id: 'p2', name: 'Bob Jones', status: 'PENDING' },
    ]);
  })
];
