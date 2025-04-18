import { FC } from 'react';

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => (
  <div className="p-4 bg-red-100 text-red-700 rounded-lg">
    {message}
  </div>
); 