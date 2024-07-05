require 'rails_helper'

RSpec.describe Exam, type: :model do
  describe 'Validations' do
    context 'is valid' do
      it 'with valid attributes' do
        exam = create(:exam)
        expect(exam).to be_valid
      end
      it 'with description empty' do
        exam = create(:exam, description: '')
        expect(exam).to be_valid
      end
    end

    context 'is invalid' do
      it 'without name' do
        exam = build(:exam, title: " ")
        expect(exam).to be_invalid
      end
    end
  end
end
