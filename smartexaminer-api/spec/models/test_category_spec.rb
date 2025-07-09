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
require 'rails_helper'

RSpec.describe TestCategory, type: :model do
  describe 'Validations' do
    context 'is valid' do
      it 'with all atributes' do
        test_category = build(:test_category)
        expect(test_category).to be_valid
      end
    end

    context 'is invalid' do
      it 'without test' do
        test_category = build(:test_category, test: nil)
        test_category.valid?
        expect(test_category.errors[:test]).to include "must exist"
      end

       it 'without category' do
        test_category = build(:test_category, category: nil)
        test_category.valid?
        expect(test_category.errors[:category]).to include "must exist"
      end
    end
  end
end
