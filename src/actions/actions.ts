import { API_URL } from '../constants/appConstants';

export const apiPost = <T>(
  url: string,
  data: Record<string, any> = {},
  onSuccess: (data: T) => void,
  onError: (errorText: string) => void,
): void => {
  const params: string[] = Object.keys(data);
  const body: string = params.map((param: string): string => `${param}=${data[param]}`).join('&');

  fetch(`${API_URL}${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
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
