import { Inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const otentikasiGuard: CanActivateFn = (route, state) => {
  console.log('Otentikasi Dimulai');

  var userId = sessionStorage.getItem('userId');
  console.log('userId : ' + userId);

  if (userId == null) {
  } else if (userId == 'undefined') {
  } else if (userId == '') {
  } else {
    return true;
  }

  Inject(Router).navigate(['/login']);
  return false;
};
