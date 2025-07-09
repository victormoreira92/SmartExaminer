# == Schema Information
#
# Table name: categories
#
#  id            :bigint           not null, primary key
#  category_name :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
require 'rails_helper'

RSpec.describe Category, type: :model do
  describe 'Validations' do
    context 'is valid' do
      it 'with all atributes' do
        category = build(:category)
        expect(category).to be_valid
      end
    end

    context 'is invalid' do
      it 'without category_name' do
        category = build(:category, category_name: '')
        category.valid?
        expect(category.errors[:category_name]).to include "can't be blank"
      end

      it 'if not unique' do
        category = create(:category)
        new_category = build(:category, category_name: category.category_name)
        new_category.valid?
        expect(new_category.errors[:category_name]).to include 'has already been taken'
      end
    end
  end
end
