Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # namespace :api do
  #   post "/memes", to: "memes#create"
  #   post "/memes1", to: "memes#create1"
  #   get "/users", to: "users#index"
  #   get "/users/:id", to: "users#show"
  #   put "/users/:id", to: "users#update"
  #   resources :things
  # end

  namespace :api do
    resources :houses
    resources :users do
      resources :houses do
        resources :visits
      end
    end
    resources :users do
      resources :costumes do
        resources :visits
      end
    end
    get 'costumes/all', to: 'costumes#all'
    get 'users/:user_id/user_house/', to: 'houses#user_house'
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end