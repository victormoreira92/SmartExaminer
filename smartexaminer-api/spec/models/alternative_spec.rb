# == Schema Information
#
# Table name: alternatives
#
#  id                :bigint           not null, primary key
#  alternative_order :integer
#  content           :string           not null
#  is_correct        :boolean
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  question_id       :bigint           not null
#
# Indexes
#
#  index_alternatives_on_question_id  (question_id)
#
# Foreign Keys
#
#  fk_rails_...  (question_id => questions.id)
#
require 'rails_helper'

RSpec.describe Alternative, type: :model do
  describe 'Validations' do
    context 'is valid' do
      it 'with all atributes' do
        question = build(:question)
        expect(question).to be_valid
      end
    end
    context 'is invalid' do
      %w[content is_correct alternative_order].each do |atributo|
        it "without #{atributo}" do
          alternative = build(:alternative, "sem_#{atributo}")
          alternative.valid?
          expect(alternative.errors[atributo]).to include("can't be blank")
        end
      end
      it 'alternative_order must be integer' do
        alternative = build(:alternative, alternative_order: 1.5)
        alternative.valid?
        expect(alternative.errors[:alternative_order]).to include(I18n.t('errors.messages.not_an_integer'))
      end

      it 'alternative_order must be greater of 0' do
        alternative = build(:alternative, alternative_order: -1)
        alternative.valid?
        expect(alternative.errors[:alternative_order]).to include(I18n.t('errors.messages.greater_than_or_equal_to', count: 0))
      end
    end
  end
end
