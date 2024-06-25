class AddFirstNameLastNameInstituitionRoleToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :instituition, :string
    add_column :users, :role, :integer
  end
end
