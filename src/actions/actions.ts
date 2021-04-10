import { API_URL } from '../constants/appConstants';

export const apiPost = <T>(
  url: string,
  data: Record<string, any> = {},
  onSuccess: (data: T) => void,
  onError: (errorText: string) => void,
  isJsonRequest: boolean = true,
): void => {
  let body = '';

  if (isJsonRequest) {
    body = JSON.stringify(data);
  } else {
    const params: string[] = Object.keys(data);

    body = params.map((param: string): string => (
      `${encodeURIComponent(param)}=${encodeURIComponent(data[param])}`
    )).join('&');
  }

  fetch(`${API_URL}${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': isJsonRequest ? 'application/json' : 'application/x-www-form-urlencoded',
    },
    body,
  })
    .then((response: Response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`${response.status} (${response.statusText})`);
    })
    .then((data: T) => {
      if (onSuccess) {
        onSuccess(data);
      }
    })
    .catch((error: Error) => {
      if (onError) {
        onError(error && error.message || 'Произошла ошибка!');
      }
    });
};
