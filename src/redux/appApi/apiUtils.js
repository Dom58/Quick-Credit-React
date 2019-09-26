import { toast } from 'react-toastify';

export async function handleResponse(response) {
  if (response.ok) {
    const data = await response.json();
    return data;
  }
  if (response.status === 400) {
    const error = await response.text();
    return error;
  }
  if (response.status === 401) {
    const error = await response.json();
    toast.error(error.message);
    return error;
  }
  if (response.status === 500) {
    const error = await response.text();
    toast.info('Server shutdown!');
    return error;
  }
  return 'Network response was not ok.';
}

export function handleError(error) {
  document.getElementById('theError').style.display = 'block';
  document.getElementById('theSuccess').style.display = 'none';
  document.getElementById('theError').innerHTML = '1. Tenor must be between <b>1-13</b> and Amount should be greater than <b>1000</b>. <br/> 2. Remember that you must be <b>verified</b> with no unpaid Loan';
  return error;
}

