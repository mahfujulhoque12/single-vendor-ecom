'use client';

import MaxWidthWrapper from '@/ui/MaxWidthWrapper';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { MdArrowBackIos } from 'react-icons/md';

type AddressFormInputs = {
  fullName: string;
  phone: string;
  landmark?: string;
  province: string;
  zone: string;
  city: string;
  address: string;
  label: 'home' | 'office';
};

const Address = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddressFormInputs>();

  const onSubmit = (data: AddressFormInputs) => {
    console.log('✅ Submitted:', data);
  };

  const inputStyles =
    'border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500';

  return (
    <MaxWidthWrapper>
        <Link href="/account" className=' flex gap-1 items-center px-3 py-2 rounded-md w-[25%] mt-2 text-green-500 text-base font-semibold'><MdArrowBackIos size={18} /> <span>Return</span></Link>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 py-2 px-4 sm:px-8 max-w-2xl mx-auto"
      >
        <h2 className="text-xl font-semibold text-gray-800">Delivery Address</h2>

        <div className="space-y-4">
          <div>
            <label className="block font-medium text-gray-700">Full Name</label>
            <input
              {...register('fullName', { required: 'Full Name is required' })}
              type="text"
              placeholder="John Doe"
              className={inputStyles}
            />
            {errors.fullName && (
              <p className="text-sm text-red-500 mt-1">{errors.fullName.message}</p>
            )}
          </div>

          <div>
            <label className="block font-medium text-gray-700">Phone Number</label>
            <input
              {...register('phone', { required: 'Phone number is required' })}
              type="tel"
              placeholder="0123456789"
              className={inputStyles}
            />
            {errors.phone && (
              <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label className="block font-medium text-gray-700">Landmark (Optional)</label>
            <input
              {...register('landmark')}
              type="text"
              placeholder="Near mosque, main road..."
              className={inputStyles}
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">Province / Region</label>
            <input
              {...register('province', { required: 'Province is required' })}
              type="text"
              placeholder="Dhaka"
              className={inputStyles}
            />
            {errors.province && (
              <p className="text-sm text-red-500 mt-1">{errors.province.message}</p>
            )}
          </div>

          <div>
            <label className="block font-medium text-gray-700">Zone</label>
            <input
              {...register('zone', { required: 'Zone is required' })}
              type="text"
              placeholder="Zone 5"
              className={inputStyles}
            />
            {errors.zone && (
              <p className="text-sm text-red-500 mt-1">{errors.zone.message}</p>
            )}
          </div>

          <div>
            <label className="block font-medium text-gray-700">City</label>
            <input
              {...register('city', { required: 'City is required' })}
              type="text"
              placeholder="Chittagong"
              className={inputStyles}
            />
            {errors.city && (
              <p className="text-sm text-red-500 mt-1">{errors.city.message}</p>
            )}
          </div>

          <div>
            <label className="block font-medium text-gray-700">Full Address</label>
            <textarea
              {...register('address', { required: 'Address is required' })}
              rows={3}
              placeholder="Street, Building, Area..."
              className={inputStyles}
            ></textarea>
            {errors.address && (
              <p className="text-sm text-red-500 mt-1">{errors.address.message}</p>
            )}
          </div>

          {/* Label selector */}
          <div>
            <label className="block font-medium text-gray-700 mb-2">
              Select a label for effective delivery:
            </label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 p-3 cursor-pointer rounded-md border border-gray-300 has-[input:checked]:bg-green-100 has-[input:checked]:text-green-700">
                <input
                  {...register('label', { required: 'Please select a label' })}
                  type="radio"
                  value="home"
                  className="accent-green-500"
                />
                Home
              </label>

              <label className="flex items-center gap-2 px-3 py-1 cursor-pointer rounded-md border border-gray-300 has-[input:checked]:bg-green-100 has-[input:checked]:text-green-700">
                <input
                  {...register('label', { required: 'Please select a label' })}
                  type="radio"
                  value="office"
                  className="accent-green-500"
                />
                Office
              </label>
            </div>
            {errors.label && (
              <p className="text-sm text-red-500 mt-1">{errors.label.message}</p>
            )}
          </div>

          <div className="pt-4 mb-20">
            <button
              type="submit"
              className="w-full cursor-pointer bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
            >
              Submit Address
            </button>
          </div>
        </div>
      </form>
    </MaxWidthWrapper>
  );
};

export default Address;
