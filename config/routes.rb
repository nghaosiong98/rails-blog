Rails.application.routes.draw do
  root 'pages#index'

  # React Router needs a wildcard
  get 'create-blog', to: 'pages#index'

  resources :blogs
end
