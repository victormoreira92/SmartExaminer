FactoryBot.define do
  factory :answer do
    answer_content { Faker::Lorem.sentence }
    correct { Faker::Boolean.boolean }
    association :question
  end
end
