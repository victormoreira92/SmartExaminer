# == Schema Information
#
# Table name: tests_categories
#
#  id          :bigint           not null, primary key
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  category_id :bigint           not null
#  test_id     :bigint           not null
#
# Indexes
#
#  index_tests_categories_on_category_id  (category_id)
#  index_tests_categories_on_test_id      (test_id)
#
# Foreign Keys
#
#  fk_rails_...  (category_id => categories.id)
#  fk_rails_...  (test_id => tests.id)
#
class TestCategory < ApplicationRecord
  belongs_to :test
  belongs_to :category
end
