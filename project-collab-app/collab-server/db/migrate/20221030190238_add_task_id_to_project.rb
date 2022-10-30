class AddTaskIdToProject < ActiveRecord::Migration[6.1]
  def change
    add_column :projects, :task_id, :integer
  end
end
