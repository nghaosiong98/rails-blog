Rails.application.routes.draw do
  root 'pages#index'

  # React Router needs a wildcard
  get 'react-router(/*all)', to: 'pages#index'

  resources :blogs
end
