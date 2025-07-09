FactoryBot.define do
  factory :test do
   title { Faker::Lorem.word }
    status_test { 0 }
    description { Faker::Lorem.sentence(word_count: 20) }
  end
end
