class RenameTypeToEvaluationType < ActiveRecord::Migration[7.0]
  def change
    rename_column :evaluations, :type, :evaluation_type
  end
end
