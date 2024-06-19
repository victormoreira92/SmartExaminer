FactoryBot.define do
  factory :status_evaluation do
    step { 1 }
    description { Faker::Lorem.sentence }
  end

  trait :waiting_for_aplication do
    step { 0 }
  end

  trait :aplication_in_process do
    step { 1 }
  end

  trait :application_completed do
    step { 2 }
  end

  trait :evaluation_archived do
    step { 3 }
  end
end
