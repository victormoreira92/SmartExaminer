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
FactoryBot.define do
  factory :alternative do
    content { Faker::Lorem.sentence }
    is_correct { false }
    alternative_order { (1..5).to_a.sample }
    association :question
  end

  trait :sem_content do
    content { nil }
  end

  trait :sem_alternative_order do
    alternative_order { nil }
  end

  trait :sem_is_correct do
    content { "" }
  end
end
