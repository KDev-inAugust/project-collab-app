class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
 
  get "/users" do
    users=User.all
   users.to_json
  end

  get "/tasks" do
    tasks=Task.all
    tasks.to_json
  end

  
end
