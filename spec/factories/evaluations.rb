FactoryBot.define do
  factory :evaluation do
    title { Faker::Lorem.sentence }
    number_questions { 13 }
    type { 1 }
  end

  trait :without_title do
    title { nil }
  end

  trait :without_type do
    type { nil }
  end

  trait :without_number_questions do
    number_questions { nil }
  end

  trait :number_questions_less_1 do
    number_questions { 0 }
  end

  trait :number_questions_not_integer do
    number_questions { 1.5 }
  end

end
