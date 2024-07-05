FactoryBot.define do
  factory :exam do
    title { Faker::Lorem.word }
    description { Faker::Lorem.paragraph }
  end

  trait :title_over_maximum_length do
    title { Faker::Lorem.characters(number: 60) }
  end

  trait :description_over_minimum_length do
    description { Faker::Lorem.characters(number: 110) }
  end
end
