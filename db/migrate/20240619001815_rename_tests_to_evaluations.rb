class RenameTestsToEvaluations < ActiveRecord::Migration[7.0]
  def self.up
    rename_table :tests, :evaluations
  end

  def self.down
    rename_table :evaluations, :tests
  end
end
