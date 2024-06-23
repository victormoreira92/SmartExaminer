FactoryBot.define do
  factory :quiz do
    association :evaluation
    question { Faker::Lorem.sentence }
    alternatives { Faker::Lorem.sentence }
    correct_answer { Faker::Lorem.sentence }
    student_answer { Faker::Lorem.sentence }
  end

  trait :without_question do
    question { nil }
  end

  trait :without_alternatives do
    alternatives { nil }
  end

  trait :without_student_answer do
    student_answer { nil }
  end

  trait :without_correct_answer do
    correct_answer { nil }
  end

  trait :without_evaluation do
    evaluation { nil }
  end
end
