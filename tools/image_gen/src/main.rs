extern crate image;
extern crate glob;
use std::path::Path;
use std::error::Error;
use glob::glob;

fn main() -> Result<(), Box<dyn Error>> {

    // Args
    let mut args = std::env::args().skip(1);
    assert_eq!(args.len(), 2, "Arguments must be: og_path, dest_path");

    // Reading args
    let og_str = args.next().unwrap();
    let dest_str = args.next().unwrap();

    let file_path = Path::new(&og_str);
    generate_images(&file_path, &dest_str);

    Ok(())
}

fn generate_images(path: &Path, dest: &str) {

    let og_filepath = path.to_str().unwrap();
    let _og_filename = path.file_name().unwrap().to_str().unwrap();
    let og_name = path.file_stem().unwrap().to_str().unwrap();

    println!("Opening {}", og_filepath);
    let img = image::open(&og_filepath).unwrap();

    let heights = vec![200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000];

    for height in heights {
        let new_filename = format!("{}_h{}.jpg", og_name, height);
        let new_filepath = format!("{}/{}", dest, new_filename);
    
        println!("Resizing to height = {}", height);
        let resized_img = img.resize(10000, height, image::imageops::FilterType::Lanczos3);
        println!("Saving {}", new_filepath);
        resized_img.save_with_format(new_filepath, image::ImageFormat::Jpeg).unwrap();
    }

    let widths = vec![200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000];

    for width in widths {
        let new_filename = format!("{}_w{}.jpg", og_name, width);
        let new_filepath = format!("{}/{}", dest, new_filename);
    
        println!("Resizing to width = {}", width);
        let resized_img = img.resize(width, 10000, image::imageops::FilterType::Lanczos3);
        println!("Saving {}", new_filepath);
        resized_img.save_with_format(new_filepath, image::ImageFormat::Jpeg).unwrap();
    }
}