FactoryBot.define do
  factory :quiz do
    title { Faker::Lorem.word }
    status_quiz { 0 }
    description { Faker::Lorem.sentence(word_count: 20) }
  end
end
