FactoryBot.define do
  factory :question do
    content { Faker::Lorem.sentence }
    score { Faker::Number.between(from: 1, to: 10) }
    feedback_correct { Faker::Lorem.paragraph(sentence_count: 20) }
    feedback_incorrect { Faker::Lorem.paragraph(sentence_count: 20) }
    type_answer { 0 }
    association :quiz
  end
end
