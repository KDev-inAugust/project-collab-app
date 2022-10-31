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

  # this will take a task id a return its user
  get "/task_user/:id" do
    user=Task.find(params[:id]).user
    user.to_json
  end

  get "/projects" do
    projects=Project.all
    projects.to_json
  end

  # this will take a project id and get all of its tasks
  get "/project_tasks/:id" do
    project=Project.find(params[:id]).tasks
    project.to_json
  end
end
