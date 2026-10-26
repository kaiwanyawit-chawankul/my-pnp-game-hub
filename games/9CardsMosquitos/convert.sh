for file in *.{png,jpg,jpeg}; do
    [ -e "$file" ] || continue
    cwebp -q 80 "$file" -o "${file%.*}.webp"
    # Optional: uncomment the line below to delete the original files after conversion
    # rm "$file"
done