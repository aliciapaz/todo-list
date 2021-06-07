/**
 * @jest-environment jsdom
 */

import header from '../src/header';

test('creates a header with a title', () => {
  const myHeader = header();
  document.body.appendChild(myHeader);
  const headerTitle = document.getElementsByTagName('H1');
  expect(headerTitle[0].innerHTML).toEqual('To do Organizer');
});
