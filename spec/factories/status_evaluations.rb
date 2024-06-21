FactoryBot.define do
  factory :status_evaluation do
    step { 1 }
    description { Faker::Lorem.sentence }
  end

  trait :evaluation_awaiting_application do
    step { 0 }
  end

  trait :evaluation_application_in_progress do
    step { 1 }
  end

  trait :evaluation_application_finished do
    step { 2 }
  end

  trait :evaluation_archived do
    step { 3 }
  end
end
