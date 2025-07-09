# == Schema Information
#
# Table name: tests
#
#  id          :bigint           not null, primary key
#  description :text
#  status_test :integer
#  title       :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
require 'rails_helper'

RSpec.describe Test, type: :model do
  describe 'Validations' do
    context 'is valid' do
      it 'all fieds filled' do
        expect { create(:test) }.to change(described_class, :count).by(1)
      end
    end

    context 'is invalid' do
      it 'status_test blank' do
        test = build(:test, status_test: nil)
        test.valid?
        expect(test.errors[:status_test]).to include "can't be blank"
      end

      it 'title blank' do
        test = build(:test, title: '')
        test.valid?
        expect(test.errors[:title]).to include "can't be blank"
      end
    end
  end
end
