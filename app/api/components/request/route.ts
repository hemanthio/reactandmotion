import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const componentName = formData.get('componentName') as string;
    const image = formData.get('image') as File;

    if (!name || !email || !componentName || !image) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Prepare file for upload
    const arrayBuffer = await image.arrayBuffer();
    const blob = new Blob([arrayBuffer], { type: image.type });

    // Generate a unique file name
    const timestamp = new Date().getTime();
    const fileName = `${timestamp}-${image.name}`;

    // Upload image to Supabase Storage
    const { data: imageData, error: uploadError } = await supabase.storage
      .from('component-images')
      .upload(fileName, blob);

    if (uploadError) {
      console.error('Upload Error:', uploadError.message);
      return NextResponse.json(
        { error: 'Error uploading image' },
        { status: 500 }
      );
    }

    // Get public URL of uploaded image
    const { data: publicUrlData } = supabase.storage
      .from('component-images')
      .getPublicUrl(fileName);

    const publicUrl = publicUrlData?.publicUrl;

    if (!publicUrl) {
      return NextResponse.json(
        { error: 'Error retrieving public URL' },
        { status: 500 }
      );
    }

    // Save request to database
    const { data, error } = await supabase
      .from('components_requests')
      .insert([
        {
          name,
          email,
          component_name: componentName,
          image_url: publicUrl,
        },
      ])
      .select();

    if (error) {
      console.error('Database Error:', error.message);
      return NextResponse.json(
        { error: 'Error saving request' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Request submitted successfully', data },
      { status: 201 }
    );
  } catch (error) {
    console.error('Internal Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
