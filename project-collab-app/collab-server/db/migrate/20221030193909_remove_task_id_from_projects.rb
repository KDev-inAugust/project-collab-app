class RemoveTaskIdFromProjects < ActiveRecord::Migration[6.1]
  def change
    remove_column :projects, :task_id, :integer
  end
end
